import { useEffect } from "react"

interface IGroupConfigurationProps{
    title: string;
}

const GroupConfiguration = ({title}: IGroupConfigurationProps) => {
    useEffect(() => {
        document.title = title;
    }, [title])
    return (
        <div>
            pagina para administrar grupo
        </div>
    )
}

export default GroupConfiguration
