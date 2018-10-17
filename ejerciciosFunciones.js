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

function normalizeGroupV2(projects) {
    

    for (let i = 0; i < projects.length; i++) {
        nombreProyectos.push({
            project: projects[i].project,
            groups: nombreGrupo(projects[i].groups),
        })

        una = "";
    }
}

var acumGrupo = "";
var una =[];

function nombreGrupo(grupos) {
    var nombreGrupo2 = [];

    for (let i = 0; i < grupos.length; i++) {
        nombreGrupo2.push(grupos[i].name)
        // console.log("name_____");
        // console.log(grupos[i].name);
        // console.log("grupo_____");
        // console.log(grupos[i].groups.length);
        if (grupos[i].groups.length)
        {
            //guardarlo en una variable y juntarlo en un arrya
            console.log("Hay mas grupos. Vuelvo a llamar......");
            una = una.concat(nombreGrupo(grupos[i].groups));
            
            
        }

        console.log("acumulo nombre");
        console.log(una);
        nombreGrupo2.push(una);
            
        
        

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
        console.log(group.groups.length);
        console.log(group.name);
        var tmpName = [];
        // return group.name
        if (!group.groups.length) {
            console.log("devuelve grupo");
            tmpName.push(group.name);
            console.log(tmpName);
            return group.name
        }

        extraerGrupos(group.groups);

    })
}

function normalizeGroup(projects) {
    

    let nuevoObj = projects.map(function (project) { return { 
        project: project.project,
        groups: extraerGrupos(project.groups)
     }});

    console.log(nuevoObj);
    
}

// normalizeGroup(projects);
normalizeGroupV2(projects);

console.log(nombreProyectos)