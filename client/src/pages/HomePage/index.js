import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

const HomePage = ({ getURL }) => {
  const [url, setUrl] = useState('')

  const handleSubmit = (e) => {
    if (url === '') {
      e.preventDefault()
    }


    getURL(url)
  }

  const navigate = useNavigate();

  const handleKeyPress = (e) => {

    if (url === '') {
      e.preventDefault()
    }
    if (e.key === 'Enter') {
      getURL(url)
      navigate('/analyz')
    }

    console.log("key down")

  }

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
            <HomePageForm>
              <HomePageCard>
                <HomePageField>
                  <HomePageLabel >
                    <HomePageInput type='url' placeholder=" " aria-label='url' value={url} onInput={e => setUrl(e.target.value)} required />
                    <HomePageInputSpan >Website URL</HomePageInputSpan>
                  </HomePageLabel>
                </HomePageField>
                <SearchButtonContainer >
                  <SearchButton to="/analyze" onClick={handleSubmit} onKeyPress={(e) => handleKeyPress(e)}>Analyze</SearchButton>
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
