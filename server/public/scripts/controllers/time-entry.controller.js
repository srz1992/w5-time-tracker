timeApp.controller('TimeEntryController', ['TimeService','NgTableParams', function(TimeService, NgTableParams){
    let vm = this;
    console.log('in TimeEntryController');

    vm.project = [
    {
        name: 'Koala Holla'
    },
    {
        name: 'Record Store'
    },
    {
        name: 'Calculator'
    }
    ]

    let data = [
        {task: "Add styling", project: 'Koala Holla', date: '17/10/11', hours: 2},
        {task: "Create controllers", project: 'Pet Hotel', date: '18/10/11', hours: 1},
        ];    

    vm.tableParams = new NgTableParams({count: data.length}, { dataset: data, counts: []});

    
    vm.addEntry = function(){
        console.log('in vm.addEntry');
        
        vm.calculateHours = function(){
           console.log('vm.startIn:', vm.startIn, '| vm.endIn:', vm.endIn);
           
            vm.startIn
            vm.endIn
        }
        vm.calculateHours();

        vm.newEntry = {
            task: vm.taskIn,
            project: vm.projectIn,
            date: vm.dateIn,
            hours: 0
        };

    }



}])