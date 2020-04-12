import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonImg,
  IonCardSubtitle,
} from "@ionic/react";

const ItemDetail: React.FC<{
  match: {
    path: string;
    url: string;
    isExact: boolean;
    params: { id: string };
  };
}> = (props) => {
  const [post, setPost] = useState<{
    userId: number;
    id: number;
    title: string;
    body: string;
  }>();

  useEffect(() => {
    const { match } = props;
    const { params } = match;
    const getPost = async () => {
      try {
        const resp = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${params.id}`
        );
        setPost(resp.data);
      } catch (error) {
          console.log(error)
      }
    };
    getPost();
  }, [props]);
  return (
      <IonCard button={true}>
        <IonImg
          src={`https://picsum.photos/480/300?random=${props.match.params.id}`}
          alt="random"
        />
        <IonCardHeader>
          <IonCardSubtitle>Post {post ? post.id : ""}</IonCardSubtitle>
          <IonCardTitle color="success">
            {post ? post.title : ""}
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent class="ion-text-wrap">
          {post ? post.body : ""}
        </IonCardContent>
      </IonCard>
  );
};

export default ItemDetail;
