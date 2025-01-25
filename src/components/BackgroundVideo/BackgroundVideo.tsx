import React from "react";
import styles from "./backgroundVideo.module.scss";

const BackgroundVideo: React.FC = () => {
  return (
    <div className={styles.backgroundVideoContainer}>
      <div className={styles.mask}/>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="https://runnerview.s3.us-east-2.amazonaws.com/back.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAQUFLQN7ZIRB6J6QL%2F20250125%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250125T145230Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLWVhc3QtMiJHMEUCIAhvnRRtsndCiYw2%2F6C%2BZ3NuwKJrA97b4N4MUNJvaMXzAiEA77Q8eiRJSFkz7j4XkfLBBN6xF5d5Rl8EaKEB33UCwX4q7AIIMBAAGgwwNDMzMDkzNjMxODYiDPcu%2BiWesbj%2FnF9deCrJAolQMAJnyQZnLuimpksOxrYLixoDDoWTEZNqJaf1k%2BP0VL%2FXCirpawDEKlGv5gm7H5Y1hHfc%2FUF84HMe7Li2l8EQkbr4fo0jkulU5Q6UzoQid3gUb1%2FgS%2BA4FBukPvFfKC%2BVXXIGwfU1DsyQ4J03v38oMehOVvB2zHkn2TvMtk5Oa3ntXFCBlan8LiiKt9jctwGiC8hGIDb6QX10XUf7d3%2BA2QlXcXp2NpNm0pcNFwYV5CXc1lUfrxAwdK%2FDwFYu9oYR1m1tgxCDe7KQzOq3ufK8frE9wzIdQ3lmjmi8uYp%2F8qUMTY8UDGNuRRJBTH5RPH8msf42MDV3QF3TILzb9nChsumtGWNDdXV29pDR%2BmYO1R2FyFNo8%2FbZWnkS0R6iv2dDPY2y9eCB9IIoY8OK0tuxB1o6ubcu87HfNcEqP5SYKehnsE2axdW4MN%2Fy07wGOrMCL4G8LqPNcouEyJi%2BlALqbYLVrsge2Ba33eDGf5g9sJPHMZMxNq%2B6269atFOGQrJiNfKrsDa3U012CA64DhnYwgv2Qgvv1DXCU2vRFcJZTi6BB9DlesLXacCaY4Mzo5CLfHfrajmWuLSghLdDdemvdu9FQaAMgffzYWU8Ckmod29aF4uzKIUXjvTId8NPM3tq1b37QCd6EUSbdExTRQNMYaaUzRIYs05%2BlOUGUETMqDVRlK%2B6qJsoKQv3PwzkEvT%2Byio5X4Hn4lDHG%2FnGd%2Bk1mtkkBEkJO8qkrB04dI3cz415IdIvSSNBJDa94DG8VmVFwOTcNQgqZSk%2FlwL2E1k4BoJ9zhXejLhW7yyf0j337eaeJy3xMp5kqKr9RZvkawckbtSM9v1nwAsiEd7wF8itlVCu5w%3D%3D&X-Amz-Signature=d604deb40bf99a4bf5309ce56d350bf5af99b513ecc867f38f19a81be97d3fdc&X-Amz-SignedHeaders=host&response-content-disposition=inline" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
