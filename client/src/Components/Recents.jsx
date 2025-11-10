import './Recents.css'

function RecentPost(){
    return(
        <div className='recentsSectionPost'>
            <h3>Sample Title</h3>
            <p>Lorem, ipsum dolor sit amet</p>
        </div>
    )
}

function Recents(){
    return(
        <section id="recentsSection">
            <p id='recentsSectionTitle'>Recents</p>
            <RecentPost></RecentPost>
            <RecentPost></RecentPost>
            <RecentPost></RecentPost>
            <RecentPost></RecentPost>
            <RecentPost></RecentPost>
        </section>
    )
}

export default Recents