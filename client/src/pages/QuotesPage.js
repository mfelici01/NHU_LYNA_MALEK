import React from "react";
import { useDispatch } from "react-redux";



import PostList from "../components/post/list";

export default function QuotesPage(){
    const dispatch = useDispatch();

    const openCreatePostModel = React.useCallback(()=>{
        // dispatch(showModal());
    }, [dispatch]);



    return (
        <PostList/>
    );

}