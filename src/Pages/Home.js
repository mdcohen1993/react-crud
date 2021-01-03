import { useAuth } from '../AuthContext'
import TweetForm from '../Components/TweetForm'


export default function Home(props){
    const { currentUser } = useAuth()
         return(
             <div>
                {currentUser && <TweetForm></TweetForm> }
            </div>
    )
}