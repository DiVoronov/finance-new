import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { io } from 'socket.io-client';
import userEvent from '@testing-library/user-event';
import { FavoritePage } from './pages/favoritePage/favoritePage';

describe('App working', () => {

  it('renders App component with correct fetch', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    screen.debug();
    
    const socket = io('http://localhost:4000');
    socket.emit('start');
    const information = await screen.findByText(/googl/i);
    expect(information);
    socket.close();
    screen.debug();
    });

    it('renders empty Favorite page correctly', () => {
      render(
        <Provider store={store}>
          <FavoritePage/>
        </Provider>
      );

      const emptyList = screen.getByText(/Your list is empty/i);
      expect(emptyList).toBeInTheDocument();

    });

    it('renders Favorite page with correct fetch from main page and element removing', async () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      userEvent.click(screen.getAllByLabelText(/addCircleOutlineIcon/i)[0]);
      userEvent.click(screen.getByLabelText(/favoritePageLink/i));

      const listWithElement = screen.getByText(/Your favorite stocks list/i);
      expect(listWithElement).toBeInTheDocument();

      userEvent.click(screen.getAllByLabelText(/removeCircleOutlineIcon/i)[0]);
      setTimeout( async () => {
        const emptyList = await new Promise((resolve) => resolve(screen.getByText(/Your list is empty/i)));
        await expect(emptyList).toBeInTheDocument();
      }, 2000);
      
    });
});







// describe('Fetches', () => {
  
//   it('fetches new', async () => {

//     render(
//       <Provider store={store}>
//         <TickerProvider/>
//       </Provider>
//     );
    
    // const socket = io('http://localhost:4000');
    // socket.on('connect', () => console.log('connected ', socket.id))
    // socket.emit('start');
    // socket.on('error', (error) => error).mockImplementationOnce(() => Promise.reject({data: 1}));

    // fetch.mockImplementationOnce(() => Promise.reject({data: 1}));
    // const information = await screen.findByText(/Something went wrong/i);
    // 
    // const information = await screen.findByText(/googl/i);

    // expect(information);

    
    // screen.debug();



    // screen.getByText(/Something went wrong/i);

    // const testTickerProvider = screen.getByRole(/test-tickerProvider/i);
    // expect(testTickerProvider).toBeInDocument();
  // })

// })

/**
test('renders learn react link', () => {
  // const { asFragment } = render(<App />);
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  // expect(asFragment(<App/>)).toMatchSnapshot();
  screen.debug()
  

// });
**/