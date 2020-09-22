import { Helper } from './helpers'

describe("testing Helper data operations", () => {
    it("returns 5 location list with an index of 5", () => {
        expect(Helper.returnNNumMovies(5).length).toBe(5);
    })
    
    it ('returns 1 with no index', () => {
        expect(Helper.returnNNumMovies().length).toBe(1);
    })
    it("returns -1 with an index of 0", () => {
        expect(Helper.returnNNumMovies(0)).toBe(-1)
    })

    it("returns -1 because the index is too big", () => {
        expect(Helper.returnNNumMovies(100000)).toBe(-1);
    })

    it("shuffle returns a new shuffled list of locations", () => {
        const locationList = Helper.locationList;
        const oldTitle = locationList[0].title;
        const newShuffledList = Helper.shuffle();
        const newTitle = newShuffledList[0].title;
        const firstListLen = locationList.length;
        const secondListLen = newShuffledList.length;
        expect(firstListLen).toBe(secondListLen);
        expect(oldTitle === newTitle).toBe(false);
        oldTitle /*?*/
        newTitle /*?*/
    })
})