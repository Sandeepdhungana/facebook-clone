import React from "react";
import Story from "./Story";
import "./StoryReel.css";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1550642249-6e5605421172?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
        profileSrc="https://images.unsplash.com/profile-1519231524829-591be5444657?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
        title="Aayusha Dhungana"
      />

      <Story
        image="https://images.unsplash.com/photo-1512036594830-51cea3a8df78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=660&q=80"
        profileSrc="https://images.unsplash.com/profile-fb-1503516161-07a118ea0076.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
        title="Sushila Sudedi"
      />
      <Story
        image="https://images.unsplash.com/photo-1523512090443-2d7df8b40358?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        profileSrc="https://images.unsplash.com/profile-fb-1467195481-8e80477e075a.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
        title="Sabitri Dhungana"
      />

      <Story
        image="https://images.unsplash.com/photo-1555652736-e92021d28a10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        profileSrc="https://images.unsplash.com/profile-fb-1541536634-a577fa534feb.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
        title="Yadu Kumar Dhungana"
      />
      <Story
        image="https://images.unsplash.com/photo-1564343003979-e531807e5b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        profileSrc="https://images.unsplash.com/profile-1610092021019-eae1a170e043image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
        title="Kushal Dhungana"
      />
    </div>
  );
}

export default StoryReel;
