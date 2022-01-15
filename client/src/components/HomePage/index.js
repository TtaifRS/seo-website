import { useState } from 'react'
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

const HomePageComponent = ({ getURL }) => {
  const [url, setUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    getURL(url)
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
                    <HomePageInput type={'url'} placeholder=" " aria-label='url' value={url} onInput={e => setUrl(e.target.value)} />
                    <HomePageInputSpan >Website URL</HomePageInputSpan>
                  </HomePageLabel>
                </HomePageField>
                {/* <HomePageField>
                    <HomePageLabel >
                      <HomePageInput type={'tel'} placeholder=" " aria-label='email' />
                      <HomePageInputSpan >Phone Number</HomePageInputSpan>
                    </HomePageLabel>
                  </HomePageField> */}
                <SearchButtonContainer >
                  <SearchButton onClick={handleSubmit}>Analyze</SearchButton>
                </SearchButtonContainer>
              </HomePageCard>
            </HomePageForm>
          </div>
        </HomePageElement>
      </HomePageContainer>
    </>
  )
}

export default HomePageComponent
