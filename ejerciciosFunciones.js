let projects = [
    {
        project: 'project 1',
        groups: [
            {
                name: 'group1',
                groups: [
                    {
                        name: 'group1.1',
                        groups: []
                    },
                    {
                        name: 'group1.2',
                        groups: [
                            {
                                name: 'group1.2.1',
                                groups: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        project: 'project2',
        groups: []
    }
]
function extraerGrupos(grupos) {
    
    return grupos.map(function (group) {
        
        if (!group.groups.length)
            return group.name
        else
            return extraerGrupos(group.groups)
    
    })
}



function normalizeGroup(projects) {
    

    let nuevoObj = projects.map(function (project) { return { 
        project: project.project,
        groups: extraerGrupos(project.groups)
     }});

    console.log(nuevoObj);
    
}

normalizeGroup(projects);