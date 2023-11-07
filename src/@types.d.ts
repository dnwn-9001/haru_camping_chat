declare module "<user>" {
  interface User {
    email: string;
    password: string;
    name: string;
    phoneNumber: string;
    nickname: string;
    term: string;
  }
}

declare module "<rentalBoard>" {
  interface RentalBoard {
    no: number;
    email: User.email;
    categoryNo: Category.no;
    title: string;
    description: string;
    image: string;
    productPrice: number;
    retalPrice: number;
    compensationRate: number;
    rentalState: string;
    rentalMethod: string;
    createDate: Date;
    modifiedDate: Date;
    deleteDate: Date;
  }
}

declare module "<voteBoard>" {
  interface VoteBoard {
    no: number;
    question: string;
    opt1: string;
    opt2: string;
    opt3: string;
    opt4: string;
    opt5: string;
    email: User.email;
  }
}

declare module "<category>" {
  interface Category {
    no: number;
    name: string;
  }
}
