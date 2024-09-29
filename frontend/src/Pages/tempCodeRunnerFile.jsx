    <div className="absolute left-0 right-0 top-0 bg-gray-800 bg-opacity-80 p-4 flex justify-between items-center">
      {Footballdata.map((match)=>
      {
        <div className="flex items-center space-x-4">
          <img src={match.competition1.image} alt="Team 1 logo" className="w-12 h-12" />
          <span className="text-2xl font-bold">VS</span>
          <img src="/placeholder.svg?height=50&width=50" alt="Team 2 logo" className="w-12 h-12" />
        </div>

      })}