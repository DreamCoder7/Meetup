import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "first meetup",
    image:
      "https://officialpsds.com/imageview/7q/pj/7qpj3w_large.png?1550944546",
    address: "some-address 004, st.",
    description: "",
  },
  {
    id: "m2",
    title: "second meetup",
    image:
      "https://officialpsds.com/imageview/7q/pj/7qpj3w_large.png?1550944546",
    address: "some-address 004, st.",
    description: "",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
