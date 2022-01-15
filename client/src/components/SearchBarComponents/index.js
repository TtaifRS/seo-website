import { useState } from 'react'
import {
  SearchBarContainer,
  SearchBarElement,
  SearchBarText,
  SearchBarHeading,
  SearchBarP,
  SearchBarForm,
  SearchBarCard,
  SearchBarLabel,
  SearchBarInput,
  SearchBarInputSpan,
  SearchBarField,
  SearchButtonContainer,
  SearchButton,
} from './SearchBarStyles.js'

const SearchBarComponent = ({ getURL }) => {
  const [url, setUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    getURL(url)
  }

  return (
    <>
      <SearchBarContainer>
        <SearchBarElement>
          <div>
            <SearchBarText>
              <SearchBarHeading>
                Check out your pages for
                <br />
                search engine optimization
              </SearchBarHeading>
              <SearchBarP>Use our FREE SEO Tool to perform on-page search engine optimization analysis</SearchBarP>
            </SearchBarText>
            <SearchBarForm>
              <SearchBarCard>

                <SearchBarField>

                  <SearchBarLabel >
                    <SearchBarInput type={'url'} placeholder=" " aria-label='url' value={url} onInput={e => setUrl(e.target.value)} />
                    <SearchBarInputSpan >Website URL</SearchBarInputSpan>
                  </SearchBarLabel>
                </SearchBarField>
                {/* <SearchBarField>
                    <SearchBarLabel >
                      <SearchBarInput type={'tel'} placeholder=" " aria-label='email' />
                      <SearchBarInputSpan >Phone Number</SearchBarInputSpan>
                    </SearchBarLabel>
                  </SearchBarField> */}
                <SearchButtonContainer >
                  <SearchButton onClick={handleSubmit}>Analyze</SearchButton>
                </SearchButtonContainer>
              </SearchBarCard>
            </SearchBarForm>
          </div>
        </SearchBarElement>
      </SearchBarContainer>
    </>
  )
}

export default SearchBarComponent
