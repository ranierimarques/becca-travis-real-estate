import { Box, Button, Hat } from "@common"
import * as S from "./latest.styles"
import { CirclesSvg, FilterSvg } from "./svgs"

const articles = [
  {
    hat: "Huntsville",
    title: "Need help selling your home?",
    date: "Feb 17, 2022",
    image: "",
  },
  {
    hat: "Huntsville",
    title: "Need help selling your home?",
    date: "Feb 17, 2022",
    image: "",
  },
  {
    hat: "Huntsville",
    title: "Need help selling your home?",
    date: "Feb 17, 2022",
    image: "",
  },
  {
    hat: "Huntsville",
    title: "Need help selling your home?",
    date: "Feb 17, 2022",
    image: "",
  },
  {
    hat: "Huntsville",
    title: "Need help selling your home?",
    date: "Feb 17, 2022",
    image: "",
  },
  {
    hat: "Huntsville",
    title: "Need help selling your home?",
    date: "Feb 17, 2022",
    image: "",
  },
  {
    hat: "Huntsville",
    title: "Need help selling your home?",
    date: "Feb 17, 2022",
    image: "",
  },
  {
    hat: "Huntsville",
    title: "Need help selling your home?",
    date: "Feb 17, 2022",
    image: "",
  },
]

export function Latest() {
  return (
    <S.Section>
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 64,
        }}
      >
        <S.LatestArticle>Latest articles</S.LatestArticle>
        <Button
          css={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 22px",
            backgroundColor: "$magenta1",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "24px",
            color: "$offWhite2",
          }}
        >
          <FilterSvg />
          Filter
        </Button>
      </Box>
      <S.Articles>
        {articles.map(article => {
          return (
            <S.Article key={article.title}>
              <Box
                css={{
                  width: "336px",
                  height: "224px",
                  backgroundColor: "$gray1",
                }}
              />
              <Box css={{ padding: "24px 0 32px 24px" }}>
                <Box
                  css={{
                    display: "flex",
                    alignItems: "center",
                    gap: 85,
                    marginBottom: 32,
                  }}
                >
                  <Hat>{article.hat}</Hat>

                  <S.ArticleDate>{article.date}</S.ArticleDate>
                </Box>
                <S.ArticleTitle>{article.title}</S.ArticleTitle>
              </Box>
            </S.Article>
          )
        })}
        <S.MissOut>
          <Box css={{ position: "absolute", bottom: 0, zIndex: 0 }}>
            <CirclesSvg />
          </Box>
          <S.MissTitle>Don&apos;t Miss Out</S.MissTitle>
          <S.MissDescription>
            New Homes are getting added all the time. Save Your Search and be
            the first to know.
          </S.MissDescription>
          <Button
            css={{
              zIndex: 2,
              padding: "12px 24px",
              background: "$magenta1",
              borderRadius: "5px",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "22px",
              color: "$white",
            }}
          >
            Get started
          </Button>
        </S.MissOut>
      </S.Articles>
    </S.Section>
  )
}
