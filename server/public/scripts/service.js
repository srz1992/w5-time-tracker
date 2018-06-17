timeApp.service('TimeService', function($http){
    console.log('in TimeService');
    let self = this;
    self.newEntry;
    self.taskList;


    // Entry functions
    self.getEntry = function(){
        return $http({
            method: 'GET',
            url: '/entry'
        }).then(function(response){
            self.taskList = response.data;  
            console.log('response.data is:', response.data);
                      
        }).catch(function(error){
            console.log('error getting tasks:', error);
        })
    }

    self.postEntry = function(){
        console.log('in self.postEntry');
        console.log('self.newEntry is', self.newEntry);
        return $http({
            method: 'POST',
            url: '/entry',
            data: self.newEntry
        }).then(function(response){
            console.log('back from the server with:', response);
        }).catch(function(error){
            console.log('error posting new entry:', error);
        })
    }

    self.deleteEntry = function(id){
        console.log('in self.deleteEntry');
        return $http({
            method: 'DELETE',
            url: `/entry/${id}`
        }).then(function(response){
            console.log('back from the server with response:', response);
            
        }).catch(function(error){
            console.log('error deleting entry:', error);
            
        })
    }

    // Project functions
    self.projectList;
    self.newProject;

    self.getProject = function(){
        console.log('in self.getProject');
        return $http({
            method: 'GET',
            url: '/project'
        }).then(function(response){
            self.projectList = response.data;
        }).catch(function(error){
            console.log('error getting tasks:', error);
        })
    }
    
    self.postProject = function(){
        console.log('in self.postProject');
        return $http({
            method: 'POST',
            url: '/project',
            data: self.newProject
        }).then(function(response){
            console.log('back from server with post response:', response);
        }).catch(function(error){
            console.log('back from server with post error:', error);
        })
    }

    self.deleteProject = function(id){
        console.log('in self.deleteProject');
        return $http({
            method: 'DELETE',
            url: `/project/${id}`,

        }).then(function(response){
            console.log('back from server with delete response:', response);
        }).catch(function(error){
            console.log('back some server with delete error:', error);
        })
    }

})