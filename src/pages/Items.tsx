import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonGrid,
} from "@ionic/react";

import Item from "../components/Item";

const Items: React.FC = () => {
  const [posts, setPosts] = useState<
    [
      {
        userId: number;
        id: number;
        title: string;
        body: string;
      }
    ]
  >();

  const renderPosts = () => {
    if (posts) {
      return posts.map((item) => {
          const img = `https://picsum.photos/480/300?random=${item.id}`;
        return (
          <div key={item.id}>
            <Item image={img} itemData={item}></Item>
          </div>
        );
      });
    }
  };

  useEffect(() => {
    const getItems = async () => {
      try {
        const resp = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );
        setPosts(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, []);
  return (
      <IonContent>
        <IonGrid>{posts && renderPosts()}</IonGrid>
      </IonContent>
  );
};

export default Items;
