import Hero from "../assets/Hero.png"

function Home() {

  return (
    <div className="px-48 pt-40">
        {/* Part 1: Brief introduction */}
        <div className="flex flex-row">
            <div className="flex-1">
                <h2 className="font-bold text-4xl">Hello, My name is Han.</h2>
                <p className="text-xl">Welcome to my lounge where I stash together all my passions, from late-night coding projects to random bursts of creative chaos. It’s my little corner of code, curiosity, and caffeine.</p>
                <button>Contact Me</button>
            </div>
            <div className="flex-1  flex justify-center items-center">
                <img src={Hero} alt="Hero" className=" w-4/5" />
            </div>
        </div>

        {/* Part 2: Skills */}
        <div>
            <h2>Skills</h2>
            <div>

            </div>
            <div>

            </div>
        </div>

        {/* Part 3: Experience */}
        <div>
            <h2>Experiences</h2>
            <div>

            </div>
            <div>

            </div>
        </div>

        {/* Part 3: Projects */}
        <div>
            <h2>Skills</h2>
            <div>

            </div>
            <div>

            </div>
        </div>

        {/* Part 4: Contact Me */}
        <div>
            <h2>Skills</h2>
            <div>

            </div>
            <div>

            </div>
        </div>

        
    </div>
  )
}

export default Home
