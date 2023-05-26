import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateUser } from '~/actions/UserActions';
import { uploadImage } from '~/actions/UploadActions'

function ProfileModal({modalOpened, setModalOpened, data}) {
  const theme = useMantineTheme();
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();
  const {user} = useSelector((state)=>state.authReducer.authData)

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
      ? setProfileImage(img)
      : setCoverImage(img);
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formData;
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(updateUser(param.id, UserData));
    setModalOpened(false);
  }

  return (
    <Modal
      overlaycolor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayopacity={0.55}
      overlayblur={3}
      size="55%"
      opened={modalOpened}
      onClose={()=> setModalOpened(false)}
    >
      <form className="info-form">
        <h3>Your info</h3>

        <div>
          <input
            type="text"
            className="info-input"
            name="firstname"
            placeholder="First Name"
            onChange={handleInputChange}
            value={other.firstname}
          />

          <input
            type="text"
            className="info-input"
            name="lastname"
            placeholder="Last Name"
            onChange={handleInputChange}
            value={other.lastname}
          />
        </div>

        <div>
          <input
            type="text"
            className="info-input"
            name="worksAt"
            placeholder="Works at"
            onChange={handleInputChange}
            value={other.worksAt}
          />
        </div>

        <div>
          <input
            type="text"
            className="info-input"
            name="livesIn"
            placeholder="Lives in"
            onChange={handleInputChange}
            value={other.livesIn}
          />

          <input
            type="text"
            className="info-input"
            name="country"
            placeholder="Country"
            onChange={handleInputChange}
            value={other.country}
          />
        </div>

        <div>
          <input
            type="text"
            className="info-input"
            name="relationship"
            placeholder="RelationShip Status"
            onChange={handleInputChange}
            value={other.relationship}
          />
        </div>


        <div>
            Profile Image 
            <input type="file" name='profileImage' onChange={onImageChange}/>
            Cover Image
            <input type="file" name="coverImage" onChange={onImageChange}/>
        </div>

        <button className="button info-btn" onClick={handleSubmit}>Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal