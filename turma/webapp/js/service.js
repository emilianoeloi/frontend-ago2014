angularApp.service('RegisterService', function($http, $rootScope){
    var serviceUrl = 'http://service.fxos.com.br/registers';
    this.add = function(entity, success){
        entity.created = new Date();
        entity.appInstance = getAppInstance();
        $http.post(serviceUrl, entity).success(success);
    }
    this.get = function(success){

        var filter = [];
        filter.push(serviceUrl);
        filter.push('?query=');
        filter.push('appInstance='+getAppInstance());

        return $http.get(filter.join('')).success(success);
    }
    this.update = function(entity,success){
        entity.updated = new Date();
        var localServiceUrl = [];
        localServiceUrl.push(serviceUrl);
        localServiceUrl.push('/')
        localServiceUrl.push(entity._id);
        return $http.put(localServiceUrl.join(''), entity).success(success);
    }
    this.delete = function(entity,success){
        var localServiceUrl = [];
        localServiceUrl.push(serviceUrl);
        localServiceUrl.push('/')
        localServiceUrl.push(entity._id);
        return $http.delete(localServiceUrl.join(''), feedback).success(success);
    }
});

angularApp.service('AppInstanceService', function($http, $rootScope){
    var serviceUrl = 'http://service.fxos.com.br/appinstances';
    var getServiceUrlWithId = function(id){
        var localServiceUrl = [];
        localServiceUrl.push(serviceUrl);
        localServiceUrl.push('/')
        localServiceUrl.push(id);
        return localServiceUrl.join('');
    }
    this.add = function(entity, success){
        entity.created = new Date();
        $http.post(serviceUrl, entity).success(success);
    }
    this.get = function(success){
        return $http.get(serviceUrl).success(success);
    }
    this.getById = function(entity, success){
        return $http.get(getServiceUrlWithId(entity._id)).success(success);
    }
    this.update = function(entity,success){
        entity.updated = new Date();
        return $http.put(getServiceUrlWithId(entity._id), entity).success(success);
    }
    this.delete = function(entity,success){
        return $http.delete(getServiceUrlWithId(entity._id), feedback).success(success);
    }
});