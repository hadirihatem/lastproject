import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadImg from "./UploadImg";
import { Modal ,Input} from "antd";
import "./Profile.css";
import { follow, unfollow } from "../action/useraction";



const ProfileFrd = ({match}) => {
    const user = useSelector(state => state.user.users)
    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch()
const newuser= user.find((userp)=>userp._id===match.params.id)
console.log(newuser)

const [subscribed, setSubscribed] = useState(true);

useEffect(() => {
    if (newuser.followers.find(follow=>follow==(auth.user._id))) setSubscribed(false);
    else setSubscribed(true);
  }, []);

  const handleclick = () => {
    setSubscribed(!subscribed);
    if (newuser.followers.find(follow=>follow===(auth.user._id)))
    dispatch(unfollow(match.params.id));
     else
    dispatch(follow(match.params.id)) 
    ;
  };


    return (
        <div>
        <header>
        <div class="containers">
          <div class="profile">
            <div class="profile-image">
              <img
                src={newuser.avatar}
                style={{ borderRadius: "50%", width: "300px", height: "300px" }}
                className="imgs"
              />
            </div>

            <div class="profile-user-settings">
              <h1 class="profile-user-name">{newuser.firstname}</h1>

            

              <button class="btn profile-edit-btn" onClick={handleclick}>
                {subscribed ? "Follow" : "Unfollow"}
              </button>
              <br/>
              <span> MY FOLLOWERS:{newuser.followers.length}</span>
              <span>FOLLOWOINGS:{newuser.following.length}</span>
               
            </div>

            <div class="profile-bio">
              <p>
                <span class="profile-real-name">
                  {newuser.firstname} {newuser.lastname}:
                </span>{" "}
                {newuser.bio} 📷✈️🏕️
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div class="container">
          <div class="gallery">
            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 56
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 2
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 89
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 5
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-type">
                <span class="visually-hidden">Gallery</span>
                <i class="fas fa-clone" aria-hidden="true"></i>
              </div>

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 42
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 1
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-type">
                <span class="visually-hidden">Video</span>
                <i class="fas fa-video" aria-hidden="true"></i>
              </div>

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 38
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 0
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-type">
                <span class="visually-hidden">Gallery</span>
                <i class="fas fa-clone" aria-hidden="true"></i>
              </div>

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 47
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 1
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 94
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 3
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-type">
                <span class="visually-hidden">Gallery</span>
                <i class="fas fa-clone" aria-hidden="true"></i>
              </div>

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 52
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 4
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 66
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 2
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-type">
                <span class="visually-hidden">Gallery</span>
                <i class="fas fa-clone" aria-hidden="true"></i>
              </div>

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 45
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 0
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 34
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 1
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 41
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 0
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-type">
                <span class="visually-hidden">Video</span>
                <i class="fas fa-video" aria-hidden="true"></i>
              </div>

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 30
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 2
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="loader"></div>
        </div>
      </main>
           
        </div>
    )
}

export default ProfileFrd