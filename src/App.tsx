import './App.scss'
import FooterBanner from './components/FooterBanner';
import ProjectCard from './components/ProjectCard';
import SideBar from './components/SideBar';

import { useEffect, useState } from 'react';
import { apiGithubRepos } from './services/api';
import styled from 'styled-components';
import { useTranslation } from "react-i18next"


function App() {
  const [text, setText] = useState('')
  const [repos, setRepos]: any = useState()
  
  const { t } = useTranslation();
  
  const TypingBanner: any = styled.div`
  & ::before{
    content: "<${t('project')}>";
    color: #4287f5;
  }
  & ::after {
    content: "<${t('project')}>";
    color: #4287f5;
  }
  `
  
  useEffect(() => { 
    document.title = t('pageTitle') 
  }, []);

  useEffect(() => {
    apiGithubRepos.then((response: any) => {
      setRepos(response.data)
    })
  },[])

  var i=0;
  useEffect(() => {
    if (document.getElementsByClassName("BannerTyping")![0].innerHTML.length > 0) {
      document.getElementsByClassName("BannerTyping")![0].innerHTML = '';
    }
    function typeWriter() {
        if (i < text.length) {
            document.getElementsByClassName("BannerTyping")![0].innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter()
  },[text])

  function sleep(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }
  useEffect(() => {
      const repositoriesData = async ()=> apiGithubRepos.then((response: any) => {
        setText('React-Portfolio')
        return response.data
      })
      const repositories: any = repositoriesData()
      async function delayed() {
          (repositories.then(async (response: any) => {
            await sleep(5000);
            setText(response[0].name)
            await sleep(5000);
            setText(response[1].name)
            await sleep(5000);
            setText(response[2].name)
          }))
      }
      setInterval(async () => {
          delayed()
      }, 20000);
  },[])

  return (
    <div className="App">
      <SideBar/>
        <div className='PageContent'>
          <header>
            <div className='Banner'>
              <img src={require('./resources/web-dev-wallpapers-125333-592863-9459897.jpg')} />
                <div className='BannerTitle'>
                  <span>{t('projects')}</span>
                </div>
                <TypingBanner className='TypingTag'>
                <span className='BannerTyping'>
                </span>
                </TypingBanner>
                <a href={repos ? repos[0].owner.html_url : ''} target="_blank"><button className='BannerButton'>{t('explore')}</button></a>
            </div>
          </header>
          <body>
            <h1 className='ProjectContentTitle'>{t('projects')}</h1>
            <div className='ProjectContent'>
              {repos ? repos.map((project: any) => <ProjectCard key={project.id} lang={project.language ? project.language : t('project')} title={project.name} description={project.description} url={project.html_url}/>) : null}
            </div>
          </body>
          <br/>
          <footer>
            <FooterBanner />
          </footer>
        </div>
    </div>
  );
}

export default App;
