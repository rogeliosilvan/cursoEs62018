let projects = [
    {
        project: 'project 1',
        groups: [
            {
                name: 'group1',
                groups: [
                    {
                        name: 'group1.1',
                        groups: [
                            {
                                name: 'group1.1.1',
                                groups: []
                            }
                        ]
                    },
                    {
                        name: 'group1.2',
                        groups: [
                            {
                                name: 'group1.2.1',
                                groups: [
                                    {
                                        name: 'group1.2.1.1',
                                        groups: []
                                    }
                                ]
                            }
                        ]
                    }                    
                ]
            }
        ]
    },
    {
        project: 'project 2',
        groups: []
    }
]

let projects2 = [
    {
        project: 'project 1',
        groups: [
            {
                name: 'group1',
                groups: [
                    {
                        name: 'group1.1',
                        groups: [
                            {
                                name: 'group1.1.1',
                                groups: [
                                    {
                                        name: 'group1.1.1.1',
                                        groups: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'group1.2',
                        groups: [
                            {
                                name: 'group1.2.1',
                                groups: [
                                    {
                                        name: 'group1.2.1.1',
                                        groups: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'group1.3',
                        groups: [
                            {
                                name: 'group1.3.1',
                                groups: [
                                    {
                                        name: 'group1.3.1.1',
                                        groups: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        project: 'project 2',
        groups: [
            {
                name: 'group2',
                groups: [
                    {
                        name: 'group2.1',
                        groups: []
                    }
                ]
            }
        ]
    }
]

var nombreProyectos = [];
// var una = "";
// var splitUna = [];

function normalizeGroupV2(projects) {
    

    for (let i = 0; i < projects.length; i++) {
        nombreProyectos.push({
            project: projects[i].project,
            groups: nombreGrupo(projects[i].groups),
        })

        // una = "";
        // splitUna = [];
    }
}



function nombreGrupo(grupos) {
    var nombreGrupo2 = [];
    

    for (let i = 0; i < grupos.length; i++) {
        nombreGrupo2.push(grupos[i].name)

        if (grupos[i].groups.length)
        {
            var una = "";
            var splitUna = [];
            //guardarlo en una variable y juntarlo en un arrya
            // console.log("Hay mas grupos. Vuelvo a llamar......");
            // una = una.concat(nombreGrupo(grupos[i].groups));
            una += nombreGrupo(grupos[i].groups);
            splitUna = una.split(',');
            // console.log(una);
            // console.log(splitUna);
            nombreGrupo2 = nombreGrupo2.concat(splitUna);
        }

    }

    return nombreGrupo2;
}


// function extraerGrupos(grupos) {

//     return grupos.map(function (group) {

//         if (!group.groups.length)
//             return group.name
//         else
//             return extraerGrupos(group.groups)

//     })
// }

function extraerGrupos(grupos) {
    

    return grupos.map(function (group) {

        var nombreGrupo2 = [];
        nombreGrupo2.push(group.name)
        // return group.name
        if (group.groups.length) {
            console.log("devuelve grupo");

            var una = "";
            var splitUna = [];
            una += extraerGrupos(group.groups);
            splitUna = una.split(',');
            console.log("una");
            console.log(una);
            console.log("splitUna");
            console.log(splitUna);
            return nombreGrupo2.concat(splitUna);
        }

        return nombreGrupo2;

    })

}

function normalizeGroup(projects) {
    

    let nuevoObj = projects.map(function (project) { return { 
        project: project.project,
        groups: extraerGrupos(project.groups)
     }});

    console.log(nuevoObj);
    
}

//normalizeGroup(projects);
normalizeGroupV2(projects);

console.log(nombreProyectos)