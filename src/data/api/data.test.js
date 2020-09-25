import { Helper } from './helpers'
import { getMovie } from './movies'

describe("Helper data operations", () => {

    describe("accessing locations", () => {
        it("returns 5 location list with an index of 5", () => {
            expect(Helper.returnNNumMovies(5).length).toBe(5);
        })
        
        it('returns 1 with no index', () => {
            expect(Helper.returnNNumMovies().length).toBe(1);
        })

        it("returns -1 with an index of 0", () => {
            expect(Helper.returnNNumMovies(0)).toBe(-1)
        })

        it("returns -1 because the index is too big", () => {
            expect(Helper.returnNNumMovies(100000)).toBe(-1);
        })

        it("returns first location", () => {
            const locationList = Helper.locationList;
            const firstItemTitle = locationList[0].movie.title;
            expect(Helper.getMovieById(0).title).toBe(firstItemTitle);
        })

        it("returns location at index 5", () => {
            const locationList = Helper.locationList;
            const fifthItemTitle = locationList[5].movie.title;
            expect(Helper.getMovieById(5).title).toBe(fifthItemTitle);
        })

        it("returns last location", () => {
            const locationList = Helper.locationList;
            const lastItemTitle = locationList[locationList.length - 1].movie.title;
            expect(Helper.getMovieById(locationList.length - 1).title).toBe(lastItemTitle);
        })

        it("returns -1 because the index is too big", () => {
            expect(Helper.getMovieById(10000)).toBe(-1);
        })

    })

    it.skip("shuffle returns a new shuffled list of locations", () => {
        const locationList = Helper.locationList;
        const oldTitle = locationList[0].title;
        const newShuffledList = Helper.shuffle();
        const newTitle = newShuffledList[0].title;
        const firstListLen = locationList.length;
        const secondListLen = newShuffledList.length;
        expect(firstListLen).toBe(secondListLen);
        expect(oldTitle === newTitle).toBe(false);
    })

    it("checks that get movie is returning a movie object", () => {
        const movie = getMovie("0");
        return movie
            .then(obj => 
                expect(obj.title).toBe("They Came Together"));
    })
})