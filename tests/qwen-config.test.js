const assert = require('node:assert/strict')
const test = require('node:test')
const { getQwenConfiguration } = require('../src/config/qwen')

const validEnvironment = {
  NEXT_PUBLIC_AI_ASSISTANT_ENABLED: 'true',
  DASHSCOPE_API_KEY: `sk-${'test'.repeat(6)}`,
  DASHSCOPE_BASE_URL: 'https://ap-southeast-1.maas.qwencloudapi.com/compatible-mode/v1',
  QWEN_MODEL: 'qwen3.8-max',
  AI_ASSISTANT_ALLOWED_ORIGINS: 'https://beccatravis.com,https://www.beccatravis.com',
}

test('returns null while the feature is disabled', () => {
  assert.equal(
    getQwenConfiguration({
      ...validEnvironment,
      NEXT_PUBLIC_AI_ASSISTANT_ENABLED: 'false',
    }),
    null
  )
})

test('accepts official regional and workspace endpoints', () => {
  const baseUrls = [
    'https://dashscope.aliyuncs.com/compatible-mode/v1',
    'https://dashscope-intl.aliyuncs.com/compatible-mode/v1',
    'https://dashscope-us.aliyuncs.com/compatible-mode/v1',
    'https://cn-hongkong.dashscope.aliyuncs.com/compatible-mode/v1',
    'https://maas.qwencloudapi.com/compatible-mode/v1',
    'https://us-east-1.maas.qwencloudapi.com/compatible-mode/v1',
    'https://workspace-id.us-east-1.maas.aliyuncs.com/compatible-mode/v1',
    'https://token-plan.maas.qwencloudapi.com/compatible-mode/v1',
  ]

  for (const baseUrl of baseUrls) {
    assert.equal(
      getQwenConfiguration({ ...validEnvironment, DASHSCOPE_BASE_URL: baseUrl })?.baseUrl,
      baseUrl
    )
  }
})

test('rejects unsafe or malformed endpoints', () => {
  const baseUrls = [
    'http://dashscope.aliyuncs.com/compatible-mode/v1',
    'https://dashscope.aliyuncs.com:8443/compatible-mode/v1',
    'https://dashscope.aliyuncs.com/compatible-mode/v1?target=evil',
    'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
    'https://workspace-id.maas.aliyuncs.com.evil.example/compatible-mode/v1',
    'https://evil.example/compatible-mode/v1',
  ]

  for (const baseUrl of baseUrls) {
    assert.equal(
      getQwenConfiguration({ ...validEnvironment, DASHSCOPE_BASE_URL: baseUrl }),
      null
    )
  }
})

test('rejects malformed keys and model identifiers', () => {
  assert.equal(
    getQwenConfiguration({
      ...validEnvironment,
      DASHSCOPE_API_KEY: 'not-a-provider-key',
    }),
    null
  )
  assert.equal(
    getQwenConfiguration({ ...validEnvironment, QWEN_MODEL: '../unexpected-model' }),
    null
  )
})

test('normalizes approved website origins and rejects unsafe origins', () => {
  assert.deepEqual(getQwenConfiguration(validEnvironment)?.allowedOrigins, [
    'https://beccatravis.com',
    'https://www.beccatravis.com',
  ])
  assert.equal(
    getQwenConfiguration({
      ...validEnvironment,
      AI_ASSISTANT_ALLOWED_ORIGINS: 'http://beccatravis.com',
    }),
    null
  )
  assert.equal(
    getQwenConfiguration({
      ...validEnvironment,
      AI_ASSISTANT_ALLOWED_ORIGINS: 'https://beccatravis.com/unexpected-path',
    }),
    null
  )
})
