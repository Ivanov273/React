import React from 'react';

import img from './1.jpg'
import s from './ProfileInfo.module.css';

const ProfileInfo  = (props) => {
	
	return (
		<div>
			<div className={s.img_container}>
				<img className={s.image} src={img} />
			</div>
			<div className={s.description}>
				ava@ + description
			</div>
		</div>
		)
	}

	export default ProfileInfo ;