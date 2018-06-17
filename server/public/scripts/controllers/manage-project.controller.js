timeApp.controller('ManageProjectsController', ['TimeService','NgTableParams', function(TimeService, NgTableParams){
    let vm = this;
    
    let data = [
        
    ];    

    vm.projectList;

    vm.tableParams = new NgTableParams({count: data.length}, { dataset: data, counts: []});

    vm.getProject = function(){
        TimeService.getProject().then(function(){
            vm.projectList = TimeService.projectList;
            console.log('vm.projectList is:', vm.projectList);
            
            data = vm.projectList;
            vm.tableParams = new NgTableParams({count: data.length}, { dataset: data, counts: []});
            
        });
    }

    vm.postProject = function(){

        vm.newProject = {
            project: vm.projectIn
        }
        TimeService.newProject = vm.newProject;
        TimeService.postProject().then(function(){vm.getProject()});
        
    }

    vm.deleteProject = function(id){
        TimeService.deleteProject(id).then(function(){vm.getProject()});;
        // TimeService.deleteEntry(id).then(function(){vm.getEntry();});
    }

    vm.getProject();

}])