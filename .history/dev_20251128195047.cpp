#include <iostream>
#include <cstring>
using namespace std;

int main(int argc, char* argv[]) {
    cout << "Number of arguments: " << argc << endl;
    cout << "Program name: " << argv[0] << endl;
    
    if (argc < 2) {
        cout << "No command line arguments provided!" << endl;
        return 1;
    }
    
    cout << "Command line arguments:" << endl;
    for (int i = 1; i < argc; i++) {
        cout << "Argument " << i << ": " << argv[i] << endl;
    }
    
    // Simple calculator using command line args
    if (argc == 4) {
        int num1 = atoi(argv[1]);
        char op = argv[2][0];
        int num2 = atoi(argv[3]);
        
        switch (op) {
            case '+': cout << "Result: " << num1 + num2 << endl; break;
            case '-': cout << "Result: " << num1 - num2 << endl; break;
            case '*': cout << "Result: " << num1 * num2 << endl; break;
            case '/': cout << "Result: " << num1 / num2 << endl; break;
            default: cout << "Invalid operator!" << endl;
        }
    }
    
    return 0;
}