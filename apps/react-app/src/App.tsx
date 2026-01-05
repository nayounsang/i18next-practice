import './App.css'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

function App() {
  const { i18n, t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)

  const handleLanguageChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value
    setIsLoading(true)
    try {
      await i18n.changeLanguage(newLanguage)
    } catch (error) {
      console.error('Language change error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div style={{ marginTop: '2rem', textAlign: 'left', maxWidth: '600px', margin: '2rem auto' }}>
        <div style={{ marginBottom: '1rem', textAlign: 'right' }}>
          <label htmlFor="language-select" style={{ marginRight: '0.5rem' }}>
            {t('language')}
          </label>
          <select
            id="language-select"
            value={i18n.language}
            onChange={handleLanguageChange}
            disabled={isLoading}
            style={{
              padding: '0.5rem',
              fontSize: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: isLoading ? 'wait' : 'pointer',
              opacity: isLoading ? 0.6 : 1
            }}
          >
            <option value="ko">한국어</option>
            <option value="en">English</option>
            <option value="ja">日本語</option>
          </select>
          {isLoading && (
            <span style={{ marginLeft: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
              로딩 중...
            </span>
          )}
        </div>
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div>번역 리소스를 불러오는 중...</div>
          </div>
        ) : (
          <>
            <h2>{t('title')}</h2>
            <img src="/cover.png" alt="cover" />
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>{t('lyrics.line1')}</li>
              <li>{t('lyrics.line2')}</li>
              <li>{t('lyrics.line3')}</li>
              <li>{t('lyrics.line4')}</li>
              <li>{t('lyrics.line5')}</li>
              <li>{t('lyrics.line6')}</li>
              <li>{t('lyrics.line7')}</li>
              <li>{t('lyrics.line8')}</li>
              <li>{t('lyrics.line9')}</li>
              <li>{t('lyrics.line10')}</li>
              <li>{t('lyrics.line11')}</li>
              <li>{t('lyrics.line12')}</li>
              <li>{t('lyrics.line13')}</li>
              <li>{t('lyrics.line14')}</li>
              <li>{t('lyrics.line15')}</li>
              <li>{t('lyrics.line16')}</li>
              <li>{t('lyrics.line17')}</li>
              <li>{t('lyrics.line18')}</li>
              <li>{t('lyrics.line19')}</li>
              <li>{t('lyrics.line20')}</li>
              <li>{t('lyrics.line21')}</li>
              <li>{t('lyrics.line22')}</li>
              <li>{t('lyrics.line23')}</li>
              <li>{t('lyrics.line24')}</li>
              <li>{t('lyrics.line25')}</li>
              <li>{t('lyrics.line26')}</li>
              <li>{t('lyrics.line27')}</li>
              <li>{t('lyrics.line28')}</li>
              <li>{t('lyrics.line29')}</li>
              <li>{t('lyrics.line30')}</li>
              <li>{t('lyrics.line31')}</li>
              <li>{t('lyrics.line32')}</li>
              <li>{t('lyrics.line33')}</li>
              <li>{t('lyrics.line34')}</li>
              <li>{t('lyrics.line35')}</li>
              <li>{t('lyrics.line36')}</li>
              <li>{t('lyrics.line37')}</li>
              <li>{t('lyrics.line38')}</li>
              <li>{t('lyrics.line39')}</li>
              <li>{t('lyrics.line40')}</li>
              <li>{t('lyrics.line41')}</li>
              <li>{t('lyrics.line42')}</li>
              <li>{t('lyrics.line43')}</li>
              <li>{t('lyrics.line44')}</li>
              <li>{t('lyrics.line45')}</li>
              <li>{t('lyrics.line46')}</li>
              <li>{t('lyrics.line47')}</li>
              <li>{t('lyrics.line48')}</li>
              <li>{t('lyrics.line49')}</li>
              <li>{t('lyrics.line50')}</li>
              <li>{t('lyrics.line51')}</li>
              <li>{t('lyrics.line52')}</li>
            </ul>
          </>
        )}
      </div>
    </>
  )
}

export default App

