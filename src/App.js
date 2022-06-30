import React from "react";
import "./style.css";

export default function App() {
  return (
    <div id="parent">
      <h1 id = "banner">Am I the Asshole</h1>
     
      

      <div id="body">
      <p>My wife and I bought a four bedroom house in PA that my son lives in. Our son went to College in PA and wanted to stay in the area. So we bought the house as a second home, we live in NJ and commute into Manhattan for work. We figured that he would have a place to live and we could visit every so often and spend some quality time together.
      <br></br>
      <br></br>
      We pay the taxes and services / maintenance on the house, our son pays for his groceries and the house utilities. All was going well for a few years, our son meets a girl and they get serious. We met her and she seems nice enough. The announce their engagement and she moves into the house with our son.
      <br></br>
      <br></br>
      Now for the problem: The wedding !!!</p>
      </div>

      <div id="response">

      <button 

      id = "option1"
      className = "responseButtons"
      title="AITA"
      onPress={() => Alert.alert()}

      />
      <button 

      id = "option2"
      className = "responseButtons"
      title="AITA"
      onPress={() => Alert.alert()}

      />
      <button 

      id = "option3"
      className = "responseButtons"
      title="AITA"
      onPress={() => Alert.alert()}

      />
      <button 

      id = "option4"
      className = "responseButtons"
      title="AITA"
      onPress={() => Alert.alert()}

      />
      </div>

    </div>

    
  );
}
