timeApp.controller('TimeEntryController', ['TimeService','NgTableParams', function(TimeService, NgTableParams){
    let vm = this;
    vm.taskList;

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

    vm.getEntry = function(){
        TimeService.getEntry().then(function(){
            vm.taskList = TimeService.taskList;
            console.log('vm.taskList is:', vm.taskList);
        })
        
    }
    
    vm.addEntry = function(){        
        vm.calculateHours = function(){
           let timeOne= moment(vm.startIn);
           let timeTwo= moment(vm.endIn);
           vm.difference = Math.abs(timeOne.diff(timeTwo, 'hours, minutes'));
           vm.difference2 = moment(vm.difference, "SSS").format("h:mm")
           console.log('vm.difference2 is:', vm.difference2);
           
        }

        moment(vm.difference, "SSS").format("h:mm")

        vm.parseDate = function(){
            console.log('in parseDate');
            vm.dateToSend = moment(vm.dateIn).format("dddd, MMM Do YYYY");
            console.log('dateToSend is:', vm.dateToSend);

        }

        // Calling addEntry functions
        vm.calculateHours();
        vm.parseDate();
        

        vm.newEntry = {
            task: vm.taskIn,
            project: vm.projectIn,
            date: vm.dateIn,
            startTime: vm.startIn,
            endTime: vm.endIn
        };

        vm.postEntry = function(){
            TimeService.newEntry = vm.newEntry;
            TimeService.postEntry().then(function(){vm.getEntry()});
            
        }
        vm.postEntry();

        console.log('vm.newEntry is:', vm.newEntry);
        }

    vm.deleteEntry = function(id){
        console.log('in vm.deleteEntry. id is:', id);
        TimeService.deleteEntry(id).then(function(){vm.getEntry();});
        
    }

    vm.getEntry();

}])