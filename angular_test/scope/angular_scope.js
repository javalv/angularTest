$new = function (isolate) {
    var child;

    // isolate参数用来作为是否创建孤立作用域的标志
    if (isolate) {
        child = new Scope();
        child.$root = this.$root;

        // 保持$$asyncQueue和$$postDigestQueue的唯一性
        child.$$asyncQueue = this.$$asyncQueue;
        child.$$postDigestQueue = this.$$postDigestQueue;
    } else {
        // 实现原型继承
        // $ChildScope构造器只在第一次调用$new方法时才会被创建
        if (!this.$$ChildScope) {
            this.$$ChildScope = function ChildScope() {
                this.$$watchers = this.$$nextSibling =
                    this.$$childHead = this.$$childTail = null;
                this.$$listeners = {};
                this.$$listenerCount = {};
                //this.$id = nextUid();
                this.$$ChildScope = null;
            };
            this.$$ChildScope.prototype = this;
        }
        child = new this.$$ChildScope();
    }

    // 维护作用域之间的父子兄弟关系
    child['this'] = child;
    child.$parent = this;
    child.$$prevSibling = this.$$childTail;
    if (this.$$childHead) {
        this.$$childTail.$$nextSibling = child;
        this.$$childTail = child;
    } else {
        this.$$childHead = this.$$childTail = child;
    }
    return child;
}