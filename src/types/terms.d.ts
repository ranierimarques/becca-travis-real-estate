// Text

type Text = {
  bold?: true
  text: string
  italic?: true
  underline?: true
}

type Link = {
  type: 'link'
  href: string
  children: text[]
  openInNewTab?: boolean
}

type Textual = Text | Link

// Heading

type HeadingOne = {
  type: 'heading-one'
  children: Textual[]
}

type HeadingTwo = {
  type: 'heading-two'
  children: Textual[]
}

type HeadingThree = {
  type: 'heading-three'
  children: Textual[]
}

type HeadingFour = {
  type: 'heading-four'
  children: Textual[]
}

type HeadingFive = {
  type: 'heading-five'
  children: Textual[]
}

type HeadingSix = {
  type: 'heading-six'
  children: Textual[]
}

type Paragraph = {
  type: 'paragraph'
  children: Textual[]
}

// Table

type TableCell = {
  type: 'table_cell'
  children: Paragraph[]
}

type TableRow = {
  type: 'table_row'
  children: TableCell[]
}

type TableBody = {
  type: 'table_body'
  children: TableRow[]
}

type Table = {
  type: 'table'
  children: TableBody[]
}

// Lists

type ListItemChild = Paragraph[] | Textual[] | BulletedList | NumberedList | Table

type NumberedList = {
  type: 'numbered-list'
  children: {
    type: 'list-item'
    children: {
      type: 'list-item-child'
      children: ListItemChild
    }[]
  }[]
}

type BulletedList = {
  type: 'bulleted-list'
  children: {
    type: 'list-item'
    children: {
      type: 'list-item-child'
      children: ListItemChild
    }[]
  }[]
}

type Content =
  | HeadingOne
  | HeadingTwo
  | HeadingThree
  | HeadingFour
  | HeadingFive
  | HeadingSix
  | Paragraph
  | BulletedList
  | NumberedList
  | Table

type TermsPage = {
  content: {
    raw: {
      children: Content[]
    }
  }
  pageTitle: string
}

export type TermsData = {
  utils: TermsPage[]
}
