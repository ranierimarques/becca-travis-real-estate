import { ReactNode } from 'react'
import { SchoolList } from 'src/pages/communities/[community]'
import { Box, Flex } from '@/common'
import { Section } from '@/template'
import * as S from './schools.styles'
import * as Svg from './svgs'

interface SchoolsProps {
  communityName: string
  schools: SchoolList
}

type SchoolLevels = keyof SchoolList

const levels: SchoolLevels[] = ['Elementary', 'Middle', 'High']

const schoolRating: Record<string, ReactNode> = {
  '1': <Svg.stars1 />,
  '2': <Svg.stars2 />,
  '3': <Svg.stars3 />,
  '4': <Svg.stars4 />,
  '5': <Svg.stars5 />,
}

export function Schools({ communityName, schools }: SchoolsProps) {
  return (
    <Section hasMaxWidth>
      <S.Title>
        Schools Near <S.Community>{communityName}</S.Community>
      </S.Title>
      <S.Description>
        The following schools are within or nearby{' '}
        <S.Community>{communityName}</S.Community>, Alabama. The rating and statistics can
        serve as a starting point to make baseline comparisons on the right schools for
        your family.
      </S.Description>

      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,

          '@bp4': {
            gridTemplateColumns: '1fr 1fr',
          },
          '@bp3': {
            gridTemplateColumns: '1fr',
          },
        }}
      >
        {levels.map(level => (
          <S.SchoolsTable key={level}>
            <S.SchoolCategory>{level}</S.SchoolCategory>
            <S.Hr />
            <ul>
              {schools[level]?.map(school => (
                <S.School key={school.schoolid}>
                  <Flex direction="column" css={{ gap: 6 }}>
                    <S.SchoolName href={school.url} target="_blank">
                      {school.schoolName}
                    </S.SchoolName>
                    <Flex align="center" css={{ gap: 8 }}>
                      <S.SchoolInfoCard>
                        Grades:{' '}
                        <span>
                          {school.lowGrade} - {school.highGrade}
                        </span>
                      </S.SchoolInfoCard>
                      <Box css={{ br: 999, w: 5, h: 5, bg: '$grayW7' }} />
                      <S.SchoolInfoCard>
                        Enrollment: <span>{school.numberOfStudents}</span>
                      </S.SchoolInfoCard>
                    </Flex>
                  </Flex>
                  <Box css={{ paddingTop: 6 }}>{schoolRating[school.rankStars]}</Box>
                </S.School>
              ))}
            </ul>
          </S.SchoolsTable>
        ))}
      </Box>
    </Section>
  )
}
