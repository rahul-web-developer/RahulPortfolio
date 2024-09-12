const Skills = () => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Front End Skills */}
        <div className="p-6 md:p-12 space-y-6 h-full">
          <div className="space-y-4">
            <p className="text-[#F9004D]" style={{ letterSpacing: "2px" }}>Features</p>
            <h1 className="text-[#1E2125] text-2xl md:text-3xl font-semibold" style={{ letterSpacing: "2px" }}>
              Front End Skills
            </h1>
          </div>

          {/* Skills List */}
          {[
            { skill: 'HTML', percentage: '60%' },
            { skill: 'CSS', percentage: '70%' },
            { skill: 'JAVASCRIPT', percentage: '70%' },
            { skill: 'Tailwindcss', percentage: '70%' },
            { skill: 'REACT.JS', percentage: '70%' },
            { skill: 'Next.JS', percentage: '70%' }
          ].map(({ skill, percentage }) => (
            <div key={skill} className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="capitalize text-lg flex items-center gap-2" style={{ letterSpacing: "2px" }}>
                  <span>{skill}</span>
                </p>
              
              </div>
              <div className="w-full bg-gray-300 rounded-[20px]">
                <div className="w-9/12 h-full p-1 bg-gradient-to-r from-gray-300 via-rose-500 to-rose-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Back End Skills */}
        <div className="p-6 md:p-12 space-y-6 h-full">
          <div className="space-y-4">
            <p className="text-[#F9004D]" style={{ letterSpacing: "2px" }}>Features</p>
            <h1 className="text-[#1E2125] text-2xl md:text-3xl font-semibold" style={{ letterSpacing: "2px" }}>
              Back End Skills
            </h1>
          </div>

          {/* Skills List */}
          {[
            { skill: 'MONGODB', percentage: '70%' },
            { skill: 'MONGOOSE', percentage: '70%' },
            { skill: 'EXPRESS', percentage: '70%' },
            { skill: 'NODE.JS', percentage: '70%' }
          ].map(({ skill, percentage }) => (
            <div key={skill} className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="capitalize text-lg flex items-center gap-2" style={{ letterSpacing: "2px" }}>
                  <span>{skill}</span>
                </p>
               
              </div>
              <div className="w-full bg-gray-300 rounded-[20px]">
                <div className="w-9/12 h-full p-1 bg-gradient-to-r from-gray-300 via-rose-500 to-rose-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* DevOps Skills */}
        <div className="p-6 md:p-12 space-y-6 h-full">
          <div className="space-y-4">
            <p className="text-[#F9004D]" style={{ letterSpacing: "2px" }}>Features</p>
            <h1 className="text-[#1E2125] text-2xl md:text-3xl font-semibold" style={{ letterSpacing: "2px" }}>
              DevOps Skills
            </h1>
          </div>

          {/* Skills List */}
          {[
            { skill: 'AWS', percentage: '70%' },
            { skill: 'GIT / GITHUB', percentage: '70%' },
            { skill: 'DOCKER', percentage: '70%' },
            { skill: 'REDIS', percentage: '70%' }
          ].map(({ skill, percentage }) => (
            <div key={skill} className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="capitalize text-lg flex items-center gap-2" style={{ letterSpacing: "2px" }}>
                  <span>{skill}</span>
                </p>
               
              </div>
              <div className="w-full bg-gray-300 rounded-[20px]">
                <div className="w-9/12 h-full p-1 bg-gradient-to-r from-gray-300 via-rose-500 to-rose-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
