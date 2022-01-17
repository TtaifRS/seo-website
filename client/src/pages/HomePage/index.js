import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

import {
  HomePageContainer,
  HomePageElement,
  HomePageText,
  HomePageHeading,
  HomePageP,
  HomePageForm,
  HomePageCard,
  HomePageLabel,
  HomePageInput,
  HomePageInputSpan,
  HomePageField,
  SearchButtonContainer,
  SearchButton,
} from './HomePageStyles.js'

const HomePage = ({ getURL, getKeyword }) => {
  const [url, setUrl] = useState('')
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (e) => {
    if (url === '' || keyword === '') {
      e.preventDefault()
    }

    getKeyword(keyword)
    getURL(url)
  }

  // const navigate = useNavigate();

  // const handleKeyPress = (e) => {

  //   if (url === '') {
  //     e.preventDefault()
  //   }
  //   if (e.key === 'Enter') {
  //     getURL(url)
  //     navigate('/analyz')
  //   }

  //   console.log("key down")

  // }

  return (
    <>
      <HomePageContainer>
        <HomePageElement>
          <div>
            <HomePageText>
              <HomePageHeading>
                Check out your pages for
                <br />
                search engine optimization
              </HomePageHeading>
              <HomePageP>Use our FREE SEO Tool to perform on-page search engine optimization analysis</HomePageP>
            </HomePageText>
            <HomePageForm onSubmit={e => { e.preventDefault(); }}>
              <HomePageCard>
                <HomePageField>
                  <HomePageLabel >
                    <HomePageInput type='url' placeholder=" " aria-label='url' value={url} onInput={e => setUrl(e.target.value)} required />
                    <HomePageInputSpan >Website URL</HomePageInputSpan>
                  </HomePageLabel>
                </HomePageField>
                <HomePageField>
                  <HomePageLabel >
                    <HomePageInput type='text' placeholder=" " aria-label='keyword' value={keyword} onInput={e => setKeyword(e.target.value)} required />
                    <HomePageInputSpan >Focus Keyword</HomePageInputSpan>
                  </HomePageLabel>
                </HomePageField>


                <SearchButtonContainer >
                  <SearchButton to="/analyze" onClick={handleSubmit}>Analyze</SearchButton>
                </SearchButtonContainer>
              </HomePageCard>
            </HomePageForm>
          </div>
        </HomePageElement>
      </HomePageContainer>
    </>
  )
}

export default HomePage
