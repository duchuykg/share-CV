import React from "react"
import styled from "@emotion/styled"
import NotionRenderer from "../components/NotionRenderer"
import useBlogQuery from "src/hooks/useBlogQuery"
import ReactMarkdown from 'react-markdown';
type Props = {}

const PageDetail: React.FC<Props> = () => {
  const data = useBlogQuery()

  if (!data) return null
  return (
    <StyledWrapper>
      {/* <NotionRenderer recordMap={data.recordMap} /> */}
      <ReactMarkdown>{data.recordMap}</ReactMarkdown>
    </StyledWrapper>
  )
}

export default PageDetail

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 56rem;
`
