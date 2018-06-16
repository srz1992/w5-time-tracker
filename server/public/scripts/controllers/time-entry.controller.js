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

    let data = [];    

    let data1 = [];

    vm.tableParams = new NgTableParams({count: data.length}, { dataset: data, counts: []});

    vm.getEntry = function(){
        let taskList;
        TimeService.getEntry().then(function(){
            vm.taskList = TimeService.taskList;
            vm.tableParams.data = vm.taskList;
            data = vm.taskList;
            console.log('vm.taskList is:', vm.taskList);
            vm.tableParams = new NgTableParams({count: vm.taskList.length}, { dataset: vm.taskList, counts: []});
            console.log('vm.tableParams is:', vm.tableParams);
            
        })
        
    }
    
    vm.addEntry = function(){        
        vm.calculateMinutestoHours = function(){
           let timeOne= moment(vm.startIn);
           let timeTwo= moment(vm.endIn);
           console.log('timeOne is:', timeOne);
           
           if (vm.startIn < vm.endIn){
            vm.difference = Math.abs(timeOne.diff(timeTwo, 'minutes'));
            vm.hoursToSend = Math.abs(vm.difference/60).toFixed(2);
            console.log('vm.difference is:', vm.difference);
            console.log('vm.hoursToSend is:', vm.hoursToSend);
           }
           else {
            vm.difference = timeOne.diff(timeTwo, 'minutes');
            vm.hoursToSend = Math.abs(vm.difference/60-24).toFixed(2);
            console.log('vm.difference is:', vm.difference);
            console.log('vm.hoursToSend is:', vm.hoursToSend);
           }
           
        }

        moment(vm.difference, "SSS").format("h:mm")

        vm.parseDate = function(){
            console.log('in parseDate');
            vm.dateToSend = moment(vm.dateIn).format("dddd, MMM Do YYYY");
            console.log('dateToSend is:', vm.dateToSend);

        }

        // Calling addEntry functions
        vm.calculateMinutestoHours();
        vm.parseDate();
        

        vm.newEntry = {
            task: vm.taskIn,
            project: vm.projectIn,
            date: vm.dateIn,
            startTime: vm.startIn,
            endTime: vm.endIn,
            hours: vm.hoursToSend
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