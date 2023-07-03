import MeetupList from "../components/meetups/MeetupList";
import { getAllMeetups, connectToDb } from "../libs/index";

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  const client = await connectToDb();
  const meetups = await getAllMeetups(client, "meetup", "meetups");

  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
          id: meetup._id.toString(),
        };
      }),
      revalidate: 1,
    },
  };
}

export default HomePage;
