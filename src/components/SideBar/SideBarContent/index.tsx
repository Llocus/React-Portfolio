import { useEffect, useState } from 'react';
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar';
import { FiPhone, FiMail } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs'
import 'react-pro-sidebar/dist/css/styles.css';
import { Avatar, Divider } from '@mui/material';
import { Line, Circle } from 'rc-progress';
import { apiGithub } from '../../../services/api';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';


const SideBarContent = (props: any) => {
    const [data, setData]: any = useState()

    const { t } = useTranslation();

    interface apiGithubInterface {
        data?: {}
    }

    useEffect(() => {
    apiGithub.then((response: apiGithubInterface) => {
        setData(response.data)
    })
    },[])

    const isTabletOrMobile = useMediaQuery({ maxWidth: 915 });
    const isMobile = useMediaQuery({ maxWidth: 512 });

    return (
    <ProSidebar collapsed={false} collapsedWidth={'5em'} rtl={false} toggled={true} width={isMobile ? '100%' : '30em'} breakPoint={undefined} className="SideBar">
    <SidebarHeader>
      <div className='SideBarHeader-Content'>
        {isTabletOrMobile ? <a className='SideBarBack' onClick={() => {
            props.setOpenBar(false)
        }}>X</a> : null}
      <Avatar alt={data ? data.name : ''} src={data ? data.avatar_url : ''} className='Avatar'/>
      <span className='Name'>{data ? data.name : ''}</span>
      <br/>
      <span className='Ocupation'>{data ? JSON.parse(data.bio)['Ocupation'] : ''}</span>
      </div>
    </SidebarHeader>
    <SidebarContent>
      <div className='UserInfo'>
        <div className='Categories'>
          <div className='Categories1'>
            {t('country')}
            <br/><br/>
            {t('city')}
            <br/><br/>
            {t('age')}
            </div>
        <div className='Categories2'>
          {data ? data.location.split(',')[0] : ''}
          <br/><br/>
          {data ? data.location.split(',')[1] : ''}
          <br/><br/>
          {data ? JSON.parse(data.bio)['Age'] : ''}
          </div>
        </div>
      <div className='Contacts'>
        <a className='Phone' href={data ? 'tel:'+JSON.parse(data.bio)['Phone'] : ''} target="_blank" rel="noreferrer"><FiPhone/><span>{data ? JSON.parse(data.bio)['Phone'] : ''}</span></a>
        <br/><br/>
        <a className='Whatsapp' href={data ? 'https://api.whatsapp.com/send?phone='+JSON.parse(data.bio)['Phone'].replace('+','') : ''} target="_blank"><BsWhatsapp/><span>whatsapp</span></a>
        <br/><br/>
        <a className='Email' href={data ? 'mailto:'+JSON.parse(data.bio)['Email'] : ''} target="_blank" rel="noreferrer"><FiMail/><span>{data ? JSON.parse(data.bio)['Email'] : ''}</span></a>
      </div>
      <br/>
      <Divider className='Divider'></Divider>
      <div className='Habilities'>
        <h4>{t('skills')}</h4>
        <span className='CirclePercentage'>80%</span>
        <span className='CirclePercentage'>72%</span>
        <span className='CirclePercentage'>65%</span>
        <br/>
        <Circle percent={80} strokeWidth={5} strokeColor="#4287f5" trailColor='#191923' className='Circle'/>
        <Circle percent={72} strokeWidth={5} strokeColor="#4287f5" trailColor='#191923' className='Circle'/>
        <Circle percent={65} strokeWidth={5} strokeColor="#4287f5" trailColor='#191923' className='Circle'/>
        <span className='CirclePercentageName'>React</span>
        <span className='CirclePercentageName'>Django</span>
        <span className='CirclePercentageName'>Flutter</span>
      </div>
      <br/>
      <Divider className='Divider'></Divider>
      <div className='Programming'>
        <h4>{t('coding')}</h4>
        <div className='ProgrammingLang'>
        JavaScript  <span>90%</span>
        </div>
        <Line percent={90} strokeWidth={2} strokeColor="#4287f5" trailColor='#191923' className='Line' />
        <div className='ProgrammingLang'>
        Python  <span>75%</span>
        </div>
        <Line percent={75} strokeWidth={2} strokeColor="#4287f5" trailColor='#191923' className='Line' />
        <div className='ProgrammingLang'>
        Dart  <span>70%</span>
        </div>
        <Line percent={70} strokeWidth={2} strokeColor="#4287f5" trailColor='#191923' className='Line' />
        <div className='ProgrammingLang'>
        HTML <span>68%</span>
        </div>
        <Line percent={68} strokeWidth={2} strokeColor="#4287f5" trailColor='#191923' className='Line' />
        <div className='ProgrammingLang'>
        CSS  <span>57%</span>
        </div>
        <Line percent={57} strokeWidth={2} strokeColor="#4287f5" trailColor='#191923' className='Line' />
        <br/><br/>
        <Divider className='Divider'></Divider>
      </div>
      <div className='ResumeDownload'>
        <a href={require('../../../resources/Resume.pdf')} target="_blank" rel="noreferrer"><button>{t('resume')}</button></a>
      </div>
    </div>
    </SidebarContent>
    </ProSidebar>
)
}

export default SideBarContent