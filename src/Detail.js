import React from "react";
import { useParams, useHistory } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { deleteBucketFB, updateBucketFB } from "./redux/modules/bucket";

import Button from "@material-ui/core/Button";

const Detail = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const bucket_index = params.index;
    const bucket_list = useSelector((state) => state.bucket.list);
    // console.log(state)
    
    return (
      <div>
        <h1>{bucket_list[bucket_index].text}</h1>
        <Button 
          variant="outlined"
          color="primary"
          onClick={() => {
          dispatch(updateBucketFB(bucket_list[bucket_index].id));
          // dispatch(updateBucket(bucket_index));
        }}>완료하기</Button>
        <Button 
          variant="outlined"
          color="secondary"
          onClick={() => {
            dispatch(deleteBucketFB(bucket_list[bucket_index].id));
            history.goBack();
        }}>삭제하기</Button>
      </div>
    );
}

export default Detail;