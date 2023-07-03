import MeetupDetail from "../../components/meetups/MeetupDetail";
import { getMeetupsById, connectToDb } from "../../libs/index";

function MeetupDetailPage(props) {
  const { title, image, address, description } = props.meetupData;

  return (
    <MeetupDetail
      title={title}
      image={image}
      address={address}
      description={description}
    />
  );
}

export async function getStaticPaths() {
  const client = await connectToDb();
  const db = client.db("meetup");
  const collection = await db.collection("meetups");

  const meetups = await collection.find({}, { _id: 1 }).toArray();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await connectToDb();
  const selectedMeetup = await getMeetupsById(
    client,
    "meetup",
    "meetups",
    meetupId
  );

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetailPage;
