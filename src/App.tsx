import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonPage,
  IonContent,
  IonTitle,
  IonRouterLink,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Items from "./pages/Items";
import ItemDetail from "./pages/ItemDetail";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonPage>
      <IonHeader>
        <IonToolbar class="ion-text-center">
          <IonRouterLink className="ion-padding-end" color="success" href={"/"}>
            Home
          </IonRouterLink>
          <IonRouterLink
            className="ion-padding-start"
            color="success"
            href={"/items"}
          >
            Items
          </IonRouterLink>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/items" component={Items} exact={true} />
            <Route path="/item/:id" component={ItemDetail} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonContent>
    </IonPage>
  </IonApp>
);

export default App;
