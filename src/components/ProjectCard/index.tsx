import './ProjectCard.scss'
import { useTranslation } from "react-i18next"

const ProjectCard = (props: any) => {
    const { t } = useTranslation();
    return (
        <>
        <div className="ProjectCard">
            <div className='Lang'>
            <span>{'<'+props.lang+'>'}</span>
            </div><div className='Title'>
            <span>{props.title}</span>
            </div><div className='Description'>
            <span>{props.description}</span>
            </div><div className='SeeMore'>
            <a href={props.url} target="_blank">{t('seemore')} {">>"}</a>
            </div>
        </div>
        </>
    )
}

export default ProjectCard;