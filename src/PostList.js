import React, { Component } from "react";
import PostItem from "./PostItem";
import "./PostList.css";

const data = [
    
];
class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    
    this.timer = null; //定时器
    this.handleVote = this.handleVote.bind(this);
    }

    componentDidMount() {
        //设计定时器模拟异步获取数据
        this.timer = setTimeout(() => {
            this.setState({
                posts: [
                    {id:1, title: "大家一起来讨论React吧", author:"张三", date:"2018-09-01 10:00", vote:0},
    {id:2, title: "大家一起来讨论React吧", author:"张三", date:"2018-09-01 10:00", vote:0},
    {id:3,  title: "大家一起来讨论React吧", author:"张三", date:"2018-09-01 10:00", vote:0}
                ]
            });
        },1000);
    }
    componentWillUnmount() {
        if(this.timer) {
            clearTimeout(this.timer);
        }
    }
    
    handleVote(id) {
        //根据ID进行过滤，找到待修改vote属性的帖子，返回新的posts对象
        const posts = this.state.posts.map(item => {
            const newItem = item.id === id ?  {...item, vote:++item.vote} : item;
            return newItem;
        });

        this.setState({
            posts
        });
    }
    
    render(){
        return (
            <div className='container'>
                <h2>话题列表：</h2>
                <ul>
                    {this.state.posts.map(item => 
                    <PostItem
                      post = {item}//post只是一个参数，这里的意思是每一个postitem的post不一样，是item的数据
                      onVote = {this.handleVote}
                    />
                    )}
                </ul>
            </div>
        );
    }
}



export default PostList;