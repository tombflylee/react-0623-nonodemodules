// 生成普通的节点
class ReactDOMTextComponent{
	constructor(text){
		this._currentElement = `${text}`;
		this._rootNodeID = null;
	}
	mountComponent(rootID){
		this._rootNodeID = rootID;
		return `<span data-reactid="${rootID}">${this._currentElement}</span>`;
	}
}

class  ReactdomComponent{
	constructor(element){
		this._currentElement = element;
		this._rootNodeID = null;
	}
	mountComponent(rootID){
		this._rootNodeID = rootID;
		var props = this._currentElement.props;
		var tagOpen = `<${this._currentElement.type}`;
		var tagClose = `</${this._currentElement.type}>`;

		//加reactid标识
		tagOpen += ` data-reactid="${this._rootNodeID}"`;
		for(let propKey in props){
			
		}
	}
}

// component 工厂
const instantiateReactComponent = (node) =>{
	if(typeof node === 'string' || typeof node === 'number'){
		return ReactDOMTextComponent(node);
	}
	//以下为根据虚拟dom，生成节点
	if(typeof node === 'object' && typeof node.type === 'string'){
		return ReactdomComponent(node);
	}
}

//虚拟dom的概念
class ReactElement{
	constructor(type,key,props){
		this.type = type;
		this.key = key;
		this.props = props;
	}
}

var React = {
	nextReactRootIndex:0,
	createElement:(type,config,...children) =>{
		var props = {};
		var propName;
		var config = config || {};
		var key = config.key || null;
		var childrenLength = children.length;
		for(propName in config){
			if(({}).hasOwnProperty.call(config,propName) &&　propName !== 'key'){
				props[propName] = config[propName];
			}
		}
		if(childrenLength === 1){
			props.children = ({}).toString.call(children) === '[object Array]' ? children : [children]; 
		}else if(childrenLength > 1){
			var childArray = new Array(childrenLength);
			for(let i = 0 ;i < childrenLength; i++){
				childArray[i] = children[i];
			}
			props.children = childArray;
		}

		return new ReactElement(type,key,props);

	},
	render:(element,container)=>{
		var componentInstance = instantiateReactComponent(element);
		var markup = componentInstance.mountComponent(this.nextReactRootIndex++);
		container.innerHTML = markup;
		document.trigger('mountReady');
	}
}
