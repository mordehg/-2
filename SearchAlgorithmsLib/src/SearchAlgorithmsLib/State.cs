using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SearchAlgorithmsLib
{
    public class State<T>
    {
        private T state;
        private double cost;
        private State<T> cameForm;

        public State(T state)
        {
            this.state = state;
        }

        public bool Equals(State<T> s)
        {
            return this.Equals(s.state);
        }

        //...
    }
}
