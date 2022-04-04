import { LargePersonList } from "./people/LargePersonList";
import { SmallPersonList } from "./people/SmallPersonList";
import { RegularList } from "./people/RegularList";

const people = [
  {
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
  },
  {
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics'],
  },
  {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
  },
];

const products = [
  {
    name: 'Flat-Screen TV',
    price: '$300',
    description: 'Huge LCD screen, a great deal',
    rating: 4.5,
  },
  {
    name: 'Basketball',
    price: '$10',
    description: 'Just like the pros use',
    rating: 3.8,
  },
  {
    name: 'Running Shoes',
    price: '$120',
    description: 'State-of-the-art technology for optimum running',
    rating: 4.2,
  },
];

function App() {
  return (
    <>
      <RegularList
        listItems={people}
        resourceName="person"
        listComponent={SmallPersonList}
      />
      <RegularList
        listItems={people}
        resourceName="person"
        listComponent={LargePersonList}
      />
    </>
  );
}

/////
/////
/////
/////

// import { SplitScreen } from './SplitScreen';

// const LeftHandComponent = () => {
//   return <h1>Left</h1>;
// };

// const RightHandComponent = () => {
//   return <h1>Right</h1>;
// };

// function App() {
//   // return <SplitScreen
//   //   left={LeftHandComponent}
//   //   right={RightHandComponent}
//   //   leftWeight={1}
//   //   rightWeight={3}
//   // />;
//   return (
//     <SplitScreen>
//       <LeftHandComponent />
//       <RightHandComponent />
//     </SplitScreen>
//   );
// }

export default App;
