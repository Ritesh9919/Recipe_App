function Home() {
  return(
    <div>
        <h1>Search Recipe Here</h1>
        <div className="SearcHBox">
            <input type="text"  placeholder="Enter Recipe Name"/>
            <button>Search</button>
        </div>
        <div className="Recipes">

        </div>
    </div>
  )
}


export default Home;