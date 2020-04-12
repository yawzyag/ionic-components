import React from "react";
import {
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonImg,
  IonCardSubtitle
} from "@ionic/react";

import imageDefault from "../assets/default-img.png";

const Item: React.FC<{
  itemData: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  image: string;
}> = (props) => {
  const { itemData, image } = props;
  const { title, body, id } = itemData;


  return (
    <IonRow>
      <IonCol>
        <IonCard href={`/item/${id}`} button={true}>
          <IonImg
            src={image || imageDefault}
            alt="random"
          />
          <IonCardHeader>
          <IonCardSubtitle>Post {id}</IonCardSubtitle>
            <IonCardTitle color="success">
              {title}
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent class="ion-text-wrap">{body}</IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default Item;
